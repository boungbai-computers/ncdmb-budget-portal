<?php

namespace App\Http\Controllers;

use App\Models\Expenditure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ExpenditureController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $expenditures = Expenditure::all();

        if ($expenditures->count() < 1) {
            return response()->json([
                'data' => null,
                'status' => 'info',
                'message' => 'No data found!!'
            ], 200);
        }

        return response()->json([
            'data' => $expenditures,
            'status' => 'success',
            'message' => 'Expenditure List'
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'sub_budget_head_id' => 'required|integer',
            'beneficiary' => 'required|string|max:255',
            'description' => 'required|min:3',
            'payment_type' => 'required|string|in:staff-payment,third-party',
            'amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => 'error',
                'message' => 'Please fix the following error(s):'
            ], 500);
        }

        $expenditure = Expenditure::create([
            'sub_budget_head_id' => $request->sub_budget_head_id,
            'reference_no' => isset($request->reference_no) ? $request->reference_no : null,
            'beneficiary' => $request->beneficiary,
            'description' => $request->description,
            'additional_info' => $request->additional_info,
            'payment_type' => $request->payment_type,
            'type' => isset($request->type) ? $request->type : "others",
            'amount' => $request->amount,
        ]);

        if ($expenditure) {
            $booked = $expenditure->subBudgetHead->fund->booked_expenditure + $expenditure->amount;

            $expenditure->subBudgetHead->fund->booked_expenditure += $expenditure->amount;
            $expenditure->subBudgetHead->fund->booked_balance = $expenditure->subBudgetHead->fund->approved_amount - $booked;
            $expenditure->subBudgetHead->fund->save();
        }

        return response()->json([
            'data' => $expenditure,
            'status' => 'success',
            'message' => 'Expenditure has been created successfully!'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($expenditure)
    {
        $expenditure = Expenditure::find($expenditure);

        if (! $expenditure) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }

        return response()->json([
            'data' => $expenditure,
            'status' => 'success',
            'message' => 'Expenditure details'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($expenditure)
    {
        $expenditure = Expenditure::find($expenditure);

        if (! $expenditure) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }

        return response()->json([
            'data' => $expenditure,
            'status' => 'success',
            'message' => 'Expenditure details'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $expenditure)
    {
        $validator = Validator::make($request->all(), [
            'sub_budget_head_id' => 'required|integer',
            'beneficiary' => 'required|string|max:255',
            'description' => 'required|min:3',
            'payment_type' => 'required|string|in:staff-payment,third-party',
            'amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => 'error',
                'message' => 'Please fix the following error(s):'
            ], 500);
        }

        $expenditure = Expenditure::find($expenditure);

        if (! $expenditure) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }

        $expenditure->update([
            'sub_budget_head_id' => $request->sub_budget_head_id,
            'reference_no' => isset($request->reference_no) ? $request->reference_no : null,
            'beneficiary' => $request->beneficiary,
            'description' => $request->description,
            'additional_info' => $request->additional_info,
            'payment_type' => $request->payment_type,
            'type' => isset($request->type) ? $request->type : "others",
            'amount' => $request->amount,
        ]);

        if ($expenditure) {
            $booked = $expenditure->subBudgetHead->fund->booked_expenditure + $expenditure->amount;

            $expenditure->subBudgetHead->fund->booked_expenditure += $expenditure->amount;
            $expenditure->subBudgetHead->fund->booked_balance = $expenditure->subBudgetHead->fund->approved_amount - $booked;
            $expenditure->subBudgetHead->fund->save();
        }

        return response()->json([
            'data' => $expenditure,
            'status' => 'success',
            'message' => 'Expenditure has been updated successfully!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Expenditure $expenditure)
    {
        $expenditure = Expenditure::find($expenditure);

        if (! $expenditure) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }

        if ($expenditure->batch_id != 0) {
            return response()->json([
                'data' => $expenditure,
                'status' => 'error',
                'message' => 'You cannot delete an expenditure that has been batched already!'
            ], 422);
        }

        $booked = $expenditure->subBudgetHead->fund->booked_expenditure - $expenditure->amount;

        $expenditure->subBudgetHead->fund->booked_expenditure -= $expenditure->amount;
        $expenditure->subBudgetHead->fund->booked_balance = $expenditure->subBudgetHead->fund->approved_amount - $booked;
        $expenditure->subBudgetHead->fund->save();

        $expenditure->delete();

        return response()->json([
            'data' => null,
            'status' => 'success',
            'message' => 'Expenditure has been deleted successfully!'
        ], 200);
    }
}

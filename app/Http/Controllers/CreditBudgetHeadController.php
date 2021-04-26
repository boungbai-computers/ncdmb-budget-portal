<?php

namespace App\Http\Controllers;

use App\Models\CreditBudgetHead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreditBudgetHeadController extends Controller
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
        $credits = CreditBudgetHead::all();

        if ($credits->count() < 1) {
            return response()->json([
                'data' => null,
                'status' => 'info',
                'message' => 'No data found!'
            ], 200);
        }

        return response()->json([
            'data' => $credits,
            'status' => 'success',
            'message' => 'Sub-Budget Credit Lists'
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
            'department_id' => 'required|integer',
            'sub_budget_head_id' => 'required|integer',
            'description' => 'required|text',
            'approved_amount' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => 'error',
                'message' => 'Please fix the following errors:'
            ], 500);
        }

        $credit = CreditBudgetHead::create([
            'department_id' => $request->department_id,
            'sub_budget_head_id' => $request->sub_budget_head_id,
            'description' => $request->description,
            'approved_amount' => $request->approved_amount
        ]);

        return response()->json([
            'data' => $credit,
            'status' => 'success',
            'message' => 'Funds have been added to this Sub-Budget successfully!'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CreditBudgetHead  $creditBudgetHead
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($creditBudgetHead)
    {
        $creditBudgetHead = CreditBudgetHead::find($creditBudgetHead);
        if (! $creditBudgetHead) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }
        return response()->json([
            'data' => $creditBudgetHead,
            'status' => 'success',
            'message' => 'Sub-Budget details'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CreditBudgetHead  $creditBudgetHead
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($creditBudgetHead)
    {
        $creditBudgetHead = CreditBudgetHead::find($creditBudgetHead);
        if (! $creditBudgetHead) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }
        return response()->json([
            'data' => $creditBudgetHead,
            'status' => 'success',
            'message' => 'Sub-Budget details'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CreditBudgetHead  $creditBudgetHead
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $creditBudgetHead)
    {
        $validator = Validator::make($request->all(), [
            'department_id' => 'required|integer',
            'sub_budget_head_id' => 'required|integer',
            'description' => 'required|text',
            'approved_amount' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => 'error',
                'message' => 'Please fix the following errors:'
            ], 500);
        }
        $creditBudgetHead = CreditBudgetHead::find($creditBudgetHead);

        if (! $creditBudgetHead) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }
        $creditBudgetHead->update([
            'department_id' => $request->department_id,
            'sub_budget_head_id' => $request->sub_budget_head_id,
            'description' => $request->description,
            'approved_amount' => $request->approved_amount
        ]);

        return response()->json([
            'data' => $creditBudgetHead,
            'status' => 'success',
            'message' => 'Funds have been updated to this Sub-Budget successfully!'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CreditBudgetHead  $creditBudgetHead
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($creditBudgetHead)
    {
        $creditBudgetHead = CreditBudgetHead::find($creditBudgetHead);

        if (! $creditBudgetHead) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID entered'
            ], 422);
        }
        $creditBudgetHead->delete();

        return response()->json([
            'data' => null,
            'status' => 'success',
            'message' => 'Sub-Budget funds deleted successfully!'
        ], 200);
    }
}

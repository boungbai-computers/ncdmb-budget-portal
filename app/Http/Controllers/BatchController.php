<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\Expenditure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BatchController extends Controller
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
        $batches = auth()->user()->batched;

        if ($batches->count() < 1) {
            return response()->json([
                'data' => null,
                'status' => 'info',
                'message' => 'No data found!'
            ], 200);
        }

        return response()->json([
            'data' => $batches,
            'status' => 'success',
            'message' => 'Batches list'
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
            'expenditures' => 'required',
            'total_amount' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'data' => $validator->errors(),
                'status' => 'error',
                'message' => 'Please fix the following errors!'
            ], 500);
        }

        $batch = Batch::create([
            'controller_id' => auth()->user()->id,
            'batch_no' => (new Batch)->batchCode($request->expenditures),
            'total_amount' => $request->total_amount
        ]);

        if ($batch) {
            if (! is_array($request->expenditures)) {
                $expenditure = Expenditure::find($request->expenditures);

                if ($expenditure) {
                    $expenditure->batch_id = $batch->id;
                    $expenditure->save();
                }
            }

            foreach($request->expenditures as $value) {
                $expenditure = Expenditure::find($value);

                if ($expenditure) {
                    $expenditure->batch_id = $batch->id;
                    $expenditure->save();
                }
            }
        }

        return response()->json([
            'data' => $batch,
            'status' => 'success',
            'message' => 'Batch created successfully!'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Batch  $batch
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($batch)
    {
        $batch = Batch::find($batch);

        if (! $batch) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID selected'
            ], 422);
        }

        return response()->json([
            'data' => $batch,
            'status' => 'success',
            'message' => 'Batch details'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Batch  $batch
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($batch)
    {
        $batch = Batch::find($batch);

        if (! $batch) {
            return response()->json([
                'data' => null,
                'status' => 'error',
                'message' => 'Invalid ID selected'
            ], 422);
        }

        return response()->json([
            'data' => $batch,
            'status' => 'success',
            'message' => 'Batch details'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Batch  $batch
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Batch $batch)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Batch  $batch
     * @return \Illuminate\Http\Response
     */
    public function destroy(Batch $batch)
    {
        //
    }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('login', 'AuthApiController@login');

    // Access Control
    Route::resource('roles', 'RoleController');
    Route::resource('modules', 'ModuleController');
    Route::resource('departments', 'DepartmentController');
    Route::resource('groups', 'GroupController');

    // Budget Control
    Route::resource('budgetHeads', 'BudgetHeadController');
    Route::resource('subBudgetHeads', 'SubBudgetHeadController');
    Route::resource('creditBudgetHeads', 'CreditBudgetHeadController');
    Route::resource('expenditures', 'ExpenditureController');
    Route::resource('batches', 'BatchController');

    // Additional Access Control Routes
    Route::post('groups/{group}/staffs', 'GroupController@addStaffsToGroup');
    Route::post('modules/{module}/groups', 'ModuleController@grantGroupsAccess');
    Route::post('modules/{module}/roles', 'ModuleController@addRolesToModule');
    Route::post('users/{user}/roles', 'AuthApiController@addRoleToUser');
    Route::post('users/{user}/departments', 'AuthApiController@addDepartmentsToStaff');
    Route::post('departments/{department}/modules', 'DepartmentController@addModulesToDepartment');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact info@ncdmb.com'
    ], 404);
});

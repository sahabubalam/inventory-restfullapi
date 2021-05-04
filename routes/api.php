<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\EmployeeController;

use App\Http\Controllers\Api\SupplierController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ExpenseController;
use App\Http\Controllers\Api\SalaryController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\PosController;
use App\Http\Controllers\Api\CartController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::post('signup', [App\Http\Controllers\AuthController::class, 'signup']);
    Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('refresh', [App\Http\Controllers\AuthController::class, 'refresh']);
    Route::post('me', [App\Http\Controllers\AuthController::class, 'me']);
    
});
Route::apiResource('/employee', EmployeeController::class);
Route::apiResource('/supplier', SupplierController::class);
Route::apiResource('/category', CategoryController::class);
Route::apiResource('/product', ProductController::class);
Route::apiResource('/expense', ExpenseController::class);
Route::post('/salary/paid/{id}', [SalaryController::class, 'paid']);
Route::get('/salary', [SalaryController::class, 'AllSalary']);
Route::get('/salary/view/{id}', [SalaryController::class, 'ViewSalary']);
Route::get('/edit/salary/{id}', [SalaryController::class, 'EditSalary']);
Route::post('/salary/update/{id}', [SalaryController::class, 'UpdateSalary']);
Route::post('/update/stock/{id}', [ProductController::class, 'UpdateStock']);
Route::apiResource('/customer', CustomerController::class);

Route::get('/getting/product/{id}', [PosController::class, 'GettingProduct']);
//add to cart
Route::get('/addtocart/{id}', [CartController::class, 'AddtoCart']);
Route::get('/cart/product', [CartController::class, 'CartProduct']);
Route::get('/remove/cart/{id}', [CartController::class, 'RemoveCart']);
Route::get('/increment/{id}', [CartController::class, 'Increment']);
Route::get('/decrement/{id}', [CartController::class, 'Decrement']);
//vat
Route::get('/vats', [CartController::class, 'Vats']);

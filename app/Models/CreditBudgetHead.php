<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditBudgetHead extends Model
{
    use HasFactory;

    protected $guarded = [''];

    public function subBudgetHead()
    {
        return $this->belongsTo(SubBudgetHead::class, 'sub_budget_head_id');
    }
}

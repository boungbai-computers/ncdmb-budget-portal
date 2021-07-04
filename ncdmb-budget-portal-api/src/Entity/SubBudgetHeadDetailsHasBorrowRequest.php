<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SubBudgetHeadDetailsHasBorrowRequest
 *
 * @ORM\Table(name="sub_budget_head_details_has_borrow_request", indexes={@ORM\Index(name="fk_sub_budget_head_details_has_borrow_request_sub_budget_he_idx", columns={"sub_budget_head_details_id"}), @ORM\Index(name="fk_sub_budget_head_details_has_borrow_request_borrow_reques_idx", columns={"borrow_request_id"}), @ORM\Index(name="fk_sub_budget_head_details_has_borrow_request_process_statu_idx", columns={"process_status_id"})})
 * @ORM\Entity
 */
class SubBudgetHeadDetailsHasBorrowRequest
{
    /**
     * @var \BorrowRequest
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="BorrowRequest")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="borrow_request_id", referencedColumnName="id")
     * })
     */
    private $borrowRequest;

    /**
     * @var \ProcessStatus
     *
     * @ORM\ManyToOne(targetEntity="ProcessStatus")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="process_status_id", referencedColumnName="id")
     * })
     */
    private $processStatus;

    /**
     * @var \SubBudgetHeadDetails
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="SubBudgetHeadDetails")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sub_budget_head_details_id", referencedColumnName="id")
     * })
     */
    private $subBudgetHeadDetails;

    public function getBorrowRequest(): ?BorrowRequest
    {
        return $this->borrowRequest;
    }

    public function setBorrowRequest(?BorrowRequest $borrowRequest): self
    {
        $this->borrowRequest = $borrowRequest;

        return $this;
    }

    public function getProcessStatus(): ?ProcessStatus
    {
        return $this->processStatus;
    }

    public function setProcessStatus(?ProcessStatus $processStatus): self
    {
        $this->processStatus = $processStatus;

        return $this;
    }

    public function getSubBudgetHeadDetails(): ?SubBudgetHeadDetails
    {
        return $this->subBudgetHeadDetails;
    }

    public function setSubBudgetHeadDetails(?SubBudgetHeadDetails $subBudgetHeadDetails): self
    {
        $this->subBudgetHeadDetails = $subBudgetHeadDetails;

        return $this;
    }


}

<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SubBudgetHeadDetails
 *
 * @ORM\Table(name="sub_budget_head_details", indexes={@ORM\Index(name="fk_sub_budget_head_details_sub_budget_head1_idx", columns={"sub_budget_head_id"}), @ORM\Index(name="fk_sub_budget_head_details_user1_idx", columns={"user_id"}), @ORM\Index(name="fk_sub_budget_head_details_department1_idx", columns={"department_id"}), @ORM\Index(name="fk_sub_budget_head_details_contractor1_idx", columns={"contractor_id"})})
 * @ORM\Entity
 */
class SubBudgetHeadDetails
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="amount", type="decimal", precision=10, scale=3, nullable=true)
     */
    private $amount;

    /**
     * @var \Contractor
     *
     * @ORM\ManyToOne(targetEntity="Contractor")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="contractor_id", referencedColumnName="id")
     * })
     */
    private $contractor;

    /**
     * @var \Department
     *
     * @ORM\ManyToOne(targetEntity="Department")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="department_id", referencedColumnName="id")
     * })
     */
    private $department;

    /**
     * @var \SubBudgetHead
     *
     * @ORM\ManyToOne(targetEntity="SubBudgetHead")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sub_budget_head_id", referencedColumnName="id")
     * })
     */
    private $subBudgetHead;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(?string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getContractor(): ?Contractor
    {
        return $this->contractor;
    }

    public function setContractor(?Contractor $contractor): self
    {
        $this->contractor = $contractor;

        return $this;
    }

    public function getDepartment(): ?Department
    {
        return $this->department;
    }

    public function setDepartment(?Department $department): self
    {
        $this->department = $department;

        return $this;
    }

    public function getSubBudgetHead(): ?SubBudgetHead
    {
        return $this->subBudgetHead;
    }

    public function setSubBudgetHead(?SubBudgetHead $subBudgetHead): self
    {
        $this->subBudgetHead = $subBudgetHead;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * SubBudgetHead
 *
 * @ORM\Table(name="sub_budget_head", indexes={@ORM\Index(name="fk_sub_budget_head_budget_heads1_idx", columns={"budget_heads_id"}), @ORM\Index(name="fk_sub_budget_head_process_status1_idx", columns={"process_status_id"})})
 * @ORM\Entity
 * @ApiResource()
 */
class SubBudgetHead
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
     * @ORM\Column(name="name", type="string", length=45, nullable=true)
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=45, nullable=true)
     */
    private $description;

    /**
     * @var \BudgetHeads
     *
     * @ORM\ManyToOne(targetEntity="BudgetHeads")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="budget_heads_id", referencedColumnName="id")
     * })
     */
    private $budgetHeads;

    /**
     * @var \ProcessStatus
     *
     * @ORM\ManyToOne(targetEntity="ProcessStatus")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="process_status_id", referencedColumnName="id")
     * })
     */
    private $processStatus;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBudgetHeads(): ?BudgetHeads
    {
        return $this->budgetHeads;
    }

    public function setBudgetHeads(?BudgetHeads $budgetHeads): self
    {
        $this->budgetHeads = $budgetHeads;

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


}

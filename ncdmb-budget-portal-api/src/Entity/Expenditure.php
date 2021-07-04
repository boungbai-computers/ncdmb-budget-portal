<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Expenditure
 *
 * @ORM\Table(name="expenditure", indexes={@ORM\Index(name="fk_expenditure_sub_budget_head_details1_idx", columns={"sub_budget_head_details_id"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Expenditure
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
     * @var \DateTime|null
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var \SubBudgetHeadDetails
     *
     * @ORM\ManyToOne(targetEntity="SubBudgetHeadDetails")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sub_budget_head_details_id", referencedColumnName="id")
     * })
     */
    private $subBudgetHeadDetails;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

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

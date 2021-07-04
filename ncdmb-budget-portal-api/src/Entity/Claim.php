<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Claim
 *
 * @ORM\Table(name="claim", indexes={@ORM\Index(name="fk_claim_claim_types1_idx", columns={"claim_types_id"}), @ORM\Index(name="fk_claim_process_status1_idx", columns={"process_status_id"}), @ORM\Index(name="fk_claim_training1_idx", columns={"training_id"})})
 * @ORM\Entity
 */
class Claim
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
     * @var \ClaimTypes
     *
     * @ORM\ManyToOne(targetEntity="ClaimTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="claim_types_id", referencedColumnName="id")
     * })
     */
    private $claimTypes;

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
     * @var \Training
     *
     * @ORM\ManyToOne(targetEntity="Training")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="training_id", referencedColumnName="id")
     * })
     */
    private $training;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClaimTypes(): ?ClaimTypes
    {
        return $this->claimTypes;
    }

    public function setClaimTypes(?ClaimTypes $claimTypes): self
    {
        $this->claimTypes = $claimTypes;

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

    public function getTraining(): ?Training
    {
        return $this->training;
    }

    public function setTraining(?Training $training): self
    {
        $this->training = $training;

        return $this;
    }


}

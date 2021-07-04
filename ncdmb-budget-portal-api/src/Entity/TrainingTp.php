<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * TrainingTp
 *
 * @ORM\Table(name="training_tp", indexes={@ORM\Index(name="fk_training_TP_TP_types1_idx", columns={"TP_types_id"}), @ORM\Index(name="fk_training_TP_training1_idx", columns={"training_id"})})
 * @ORM\Entity
 * @ApiResource()
 */
class TrainingTp
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
     * @ORM\Column(name="cost", type="decimal", precision=10, scale=3, nullable=true)
     */
    private $cost;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=100, nullable=true)
     */
    private $description;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var \TpTypes
     *
     * @ORM\ManyToOne(targetEntity="TpTypes")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="TP_types_id", referencedColumnName="id")
     * })
     */
    private $tpTypes;

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

    public function getCost(): ?string
    {
        return $this->cost;
    }

    public function setCost(?string $cost): self
    {
        $this->cost = $cost;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getTpTypes(): ?TpTypes
    {
        return $this->tpTypes;
    }

    public function setTpTypes(?TpTypes $tpTypes): self
    {
        $this->tpTypes = $tpTypes;

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

<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Training
 *
 * @ORM\Table(name="training", indexes={@ORM\Index(name="fk_training_training_venues1_idx", columns={"training_venues_id"}), @ORM\Index(name="fk_training_travel_feeding1_idx", columns={"travel_feeding_id"}), @ORM\Index(name="fk_training_user1_idx", columns={"user_id"}), @ORM\Index(name="fk_training_training_location1_idx", columns={"training_location_id"}), @ORM\Index(name="fk_training_travel_accomodation1_idx", columns={"travel_accomodation_id"})})
 * @ORM\Entity
 */
class Training
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
     * @var \DateTime|null
     *
     * @ORM\Column(name="start_date", type="datetime", nullable=true)
     */
    private $startDate;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="expiry_date", type="datetime", nullable=true)
     */
    private $expiryDate;

    /**
     * @var int|null
     *
     * @ORM\Column(name="no_of_days", type="integer", nullable=true)
     */
    private $noOfDays;

    /**
     * @var \TrainingLocation
     *
     * @ORM\ManyToOne(targetEntity="TrainingLocation")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="training_location_id", referencedColumnName="id")
     * })
     */
    private $trainingLocation;

    /**
     * @var \TrainingVenues
     *
     * @ORM\ManyToOne(targetEntity="TrainingVenues")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="training_venues_id", referencedColumnName="id")
     * })
     */
    private $trainingVenues;

    /**
     * @var \TravelAccomodation
     *
     * @ORM\ManyToOne(targetEntity="TravelAccomodation")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="travel_accomodation_id", referencedColumnName="idtravel_accomodation")
     * })
     */
    private $travelAccomodation;

    /**
     * @var \TravelFeeding
     *
     * @ORM\ManyToOne(targetEntity="TravelFeeding")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="travel_feeding_id", referencedColumnName="id")
     * })
     */
    private $travelFeeding;

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(?\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getExpiryDate(): ?\DateTimeInterface
    {
        return $this->expiryDate;
    }

    public function setExpiryDate(?\DateTimeInterface $expiryDate): self
    {
        $this->expiryDate = $expiryDate;

        return $this;
    }

    public function getNoOfDays(): ?int
    {
        return $this->noOfDays;
    }

    public function setNoOfDays(?int $noOfDays): self
    {
        $this->noOfDays = $noOfDays;

        return $this;
    }

    public function getTrainingLocation(): ?TrainingLocation
    {
        return $this->trainingLocation;
    }

    public function setTrainingLocation(?TrainingLocation $trainingLocation): self
    {
        $this->trainingLocation = $trainingLocation;

        return $this;
    }

    public function getTrainingVenues(): ?TrainingVenues
    {
        return $this->trainingVenues;
    }

    public function setTrainingVenues(?TrainingVenues $trainingVenues): self
    {
        $this->trainingVenues = $trainingVenues;

        return $this;
    }

    public function getTravelAccomodation(): ?TravelAccomodation
    {
        return $this->travelAccomodation;
    }

    public function setTravelAccomodation(?TravelAccomodation $travelAccomodation): self
    {
        $this->travelAccomodation = $travelAccomodation;

        return $this;
    }

    public function getTravelFeeding(): ?TravelFeeding
    {
        return $this->travelFeeding;
    }

    public function setTravelFeeding(?TravelFeeding $travelFeeding): self
    {
        $this->travelFeeding = $travelFeeding;

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

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * TravelAccomodation
 *
 * @ORM\Table(name="travel_accomodation")
 * @ORM\Entity
 * @ApiResource()
 */
class TravelAccomodation
{
    /**
     * @var int
     *
     * @ORM\Column(name="idtravel_accomodation", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idtravelAccomodation;

    /**
     * @var string
     *
     * @ORM\Column(name="hotel_name", type="string", length=100, nullable=false)
     */
    private $hotelName;

    /**
     * @var string
     *
     * @ORM\Column(name="no_of_nights", type="string", length=100, nullable=false)
     */
    private $noOfNights;

    /**
     * @var string
     *
     * @ORM\Column(name="extra_nights", type="string", length=100, nullable=false)
     */
    private $extraNights;

    /**
     * @var string
     *
     * @ORM\Column(name="cost_per_night", type="string", length=100, nullable=false)
     */
    private $costPerNight;

    public function getIdtravelAccomodation(): ?int
    {
        return $this->idtravelAccomodation;
    }

    public function getHotelName(): ?string
    {
        return $this->hotelName;
    }

    public function setHotelName(string $hotelName): self
    {
        $this->hotelName = $hotelName;

        return $this;
    }

    public function getNoOfNights(): ?string
    {
        return $this->noOfNights;
    }

    public function setNoOfNights(string $noOfNights): self
    {
        $this->noOfNights = $noOfNights;

        return $this;
    }

    public function getExtraNights(): ?string
    {
        return $this->extraNights;
    }

    public function setExtraNights(string $extraNights): self
    {
        $this->extraNights = $extraNights;

        return $this;
    }

    public function getCostPerNight(): ?string
    {
        return $this->costPerNight;
    }

    public function setCostPerNight(string $costPerNight): self
    {
        $this->costPerNight = $costPerNight;

        return $this;
    }


}

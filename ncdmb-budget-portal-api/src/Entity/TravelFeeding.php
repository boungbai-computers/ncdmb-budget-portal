<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TravelFeeding
 *
 * @ORM\Table(name="travel_feeding", indexes={@ORM\Index(name="fk_travel_feeding_feeding_periods1_idx", columns={"feeding_periods_id"})})
 * @ORM\Entity
 */
class TravelFeeding
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
     * @var int|null
     *
     * @ORM\Column(name="day_no", type="integer", nullable=true)
     */
    private $dayNo;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cost", type="decimal", precision=10, scale=3, nullable=true)
     */
    private $cost;

    /**
     * @var string|null
     *
     * @ORM\Column(name="travel_feedingcol", type="string", length=45, nullable=true)
     */
    private $travelFeedingcol;

    /**
     * @var \FeedingPeriods
     *
     * @ORM\ManyToOne(targetEntity="FeedingPeriods")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="feeding_periods_id", referencedColumnName="id")
     * })
     */
    private $feedingPeriods;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDayNo(): ?int
    {
        return $this->dayNo;
    }

    public function setDayNo(?int $dayNo): self
    {
        $this->dayNo = $dayNo;

        return $this;
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

    public function getTravelFeedingcol(): ?string
    {
        return $this->travelFeedingcol;
    }

    public function setTravelFeedingcol(?string $travelFeedingcol): self
    {
        $this->travelFeedingcol = $travelFeedingcol;

        return $this;
    }

    public function getFeedingPeriods(): ?FeedingPeriods
    {
        return $this->feedingPeriods;
    }

    public function setFeedingPeriods(?FeedingPeriods $feedingPeriods): self
    {
        $this->feedingPeriods = $feedingPeriods;

        return $this;
    }


}

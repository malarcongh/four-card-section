import React from 'react'
import Card from './card'
import CalculatorIcon from '../assets/icon-calculator.svg';
import KarmaIcon from '../assets/icon-karma.svg';
import SupervisorIcon from '../assets/icon-supervisor.svg';
import TeamBuilderIcon from '../assets/icon-team-builder.svg';

const cards = [
  {
    title: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    color: 'green',
    img: SupervisorIcon
  },
  {
    title: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    color: 'red',
    img: TeamBuilderIcon
  },
  {
    title: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    color: 'orange',
    img: KarmaIcon
  },
  {
    title: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    color: 'blue',
    img: CalculatorIcon
  }
]

export default function CardsMasonry() {
  return (
    <div className="cards-masonry">
      {cards.map(card => <Card title={card.title} text={card.text} img={card.img} color={card.color}/>)}
    </div>
  )
}

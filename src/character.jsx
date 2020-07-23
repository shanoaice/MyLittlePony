/** @jsx h */
import { h, Fragment } from 'preact'
import { Title, RainbowTitle } from './utilComponents'

const characterList = {
  'Twilight Sparkle': {
    description:
      'Twilight Sparkle is the central protagonist of the series. She is a purple alicorn. Her Cutie Mark is a pink hexagonal star with a white large hexagonal star inside, surrounded by five white small hexagonal stars, it represents her talent for magic and love for astronomy.',
    color: 'rgb(185,13,189)',
  },
  'Rainbow Dash': {
    description:
      'Rainbow Dash is a blue pegasus with a rainbow-colored mane and tail. Her Cutie Mark is a cloud with a rainbow of lightning underneath, it represents her athleticism and obsession with speed and adventure.',
    color: 'rgb(0,182,234)',
  },
  Applejack: {
    description:
      'Applejack is an orange, blonde-haired earth pony. Her Cutie Mark is three apples, it represents her talent for agriculture and love for her family.',
    color: 'rgb(231,105,37)',
  },
  Rarity: {
    description:
      'Rarity is a white unicorn with a curled violet mane. Her Cutie Mark is three blue diamonds, it represents her talent for prospecting gemstones and her love of art and beauty.',
    color: 'purple',
  },
  Fluttershy: {
    description:
      'Fluttershy is a yellow pink-maned pegasus. Her Cutie Mark is three pink butterflies, it represents her love of nature and talent as an animal caretaker.',
    color: 'rgb(220,130,210)',
  },
  'Pinkie Pie': {
    description:
      'Pinkie Pie is a pink earth pony. Her Cutie Mark is one yellow ballon between two blue ballons, it represents her talent for spreading hope and joy, and her desire to entertain her friends.',
    color: 'palevioletred',
  },
  Spike: {
    description:
      'Spike is a purple baby dragon with green spines. He fulfills the role of  Twilight\'s "number one assistant" to which he is named so for his loyalty and skill at helping Twilight solve problems and learn lessons.',
    color: 'rgb(5,190,25)',
  },
  'Starlight Glimmer': {
    description: 'Starlight Glimmer is a unicorn.',
    color: 'rgb(125,0,255)',
  },
  'Princess Celestia': {
    description:
      "Princess Celestia is a white alicorn with a flowing, multicolored mane and tail. She is Equestria's benevolent ruler.",
    rainbow: true,
  },
  'Princess Luna': {
    description:
      'Princess Luna, also named "Selena" in earlier drafts, is a dark blue alicorn and Princess Celestia\'s younger sister.',
  },
  'Princess Cadance': {
    description:
      'Princess Cadance is a kind alicorn. She is Princess Celestia\'s adopted niece and Twilight\'s childhood "foal-sitter"',
  },
  'Shining Armor': {
    description:
      'Shining Armor is unicorn. He is the captain of Canterlot\'s royal guard who has a close relationship with his sister and nicknamed her "Big Brother Best Friend Forever" (B.B.B.F.F.). He is also the husband of Princess Cadance.',
  },
  'Flurry Heart': {
    description:
      'Flurry Heart is a alicorn. She is the daughter of Princess Cadance and Shining Armor.',
  },
  'Apple Bloom': {
    description:
      'Apple Bloom is a yellow earth pony filly with a red mane and a pink mane bow.',
  },
  'Sweetie Belle': {
    description:
      'Sweetie Belle is a "sweet-natured and sometimes spacey" unicorn filly with a white coat and a lavender and pink-striped mane.',
  },
  Scootaloo: {
    description: 'Scootaloo is an orange pegasus filly with a purple mane.',
  },
  'Big Mac': {
    description:
      "Big Mac, is a large earth pony who is Applejack and Apple Bloom's older brother.",
  },
  Trixie: {
    description: 'Trixie is a unicorn.',
  },
  'Diamond Tiara': {
    description: 'Diamond Tiara is an earth pony.',
  },
  'Silver Spoon': {
    description: 'Silver Spoon is an earth pony.',
  },
  Discord: {
    description:
      'Discord is a "draconequus", which is a serpentine being with a pony\'s head and numerous different animal parts.',
  },
}

export default function (name) {
  const { description, color = 'inherit', rainbow } = characterList[name]
  if (rainbow) {
    return () => {
      return (
        <Fragment>
          <RainbowTitle>{name}</RainbowTitle>
          <div>{description}</div>
        </Fragment>
      )
    }
  }

  return () => {
    return (
      <Fragment>
        <Title color={color}>{name}</Title>
        <div>{description}</div>
      </Fragment>
    )
  }
}

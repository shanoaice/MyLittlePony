/** @jsx h */
import { h } from 'preact'
import TwilightSparkle from './img/Twilight Sparkle.jpg'
import RainbowDash from './img/Rainbow Dash.jpg'
import Applejack from './img/Applejack.jpg'
import Rarity from './img/Rarity.jpg'
import Fluttershy from './img/Fluttershy.jpg'
import PinkiePie from './img/Pinkie Pie.jpg'
import Spike from './img/Spike.jpg'
import StarlightGlimmer from './img/Starlight Glimmer.jpg'
import PrincessCelestia from './img/Princess Celestia.jpg'
import PrincessLuna from './img/Princess Luna.jpg'
import PrincessCadance from './img/Princess Cadance.jpg'
import ShiningArmor from './img/Shining Armor.jpg'
import FlurryHeart from './img/Flurry Heart.jpg'
import AppleBloom from './img/Apple Bloom.jpg'
import SweetieBelle from './img/Sweetie Belle.jpg'
import Scootaloo from './img/Scootaloo.jpg'
import BigMac from './img/Big Macintosh.jpg'
import Trixie from './img/Trixie.jpg'
import DiamondTiara from './img/Diamond Tiara.jpg'
import SilverSpoon from './img/Silver Spoon.jpg'
import Discord from './img/Discord.jpg'

const pictures = {
  'Twilight Sparkle': TwilightSparkle,
  'Rainbow Dash': RainbowDash,
  Applejack,
  Rarity,
  Fluttershy,
  'Pinkie Pie': PinkiePie,
  Spike,
  'Starlight Glimmer': StarlightGlimmer,
  'Princess Celestia': PrincessCelestia,
  'Princess Luna': PrincessLuna,
  'Princess Cadance': PrincessCadance,
  'Shining Armor': ShiningArmor,
  'Flurry Heart': FlurryHeart,
  'Apple Bloom': AppleBloom,
  'Sweetie Belle': SweetieBelle,
  Scootaloo,
  'Big Mac': BigMac,
  Trixie,
  'Diamond Tiara': DiamondTiara,
  'Silver Spoon': SilverSpoon,
  Discord
}

export default function(name) {
  return () => {
    return <img src={pictures[name]} alt={name} />
  }
}

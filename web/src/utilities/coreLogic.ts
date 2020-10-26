import { Faction } from '@/interfaces/'

// const determineIfShipHasDual = targetShipUpgrades => {
//   const upgradeValues = Object.values(targetShipUpgrades)
//   let hasDualEquipped = false
//   upgradeValues.forEach(upgrade => {

//   })
// }

export const reformatMultipleUpgradeSlotsName = upgradeSlotName => {
  if(upgradeSlotName.includes('2')){
    const splitName = upgradeSlotName.split('-')
    const nameArray = [splitName[0], splitName[1]]
    return nameArray.join('-')
  } else {
    return upgradeSlotName
  }
} 

export const determineCardsToBeShown = config => {
  const upgradeType = reformatMultipleUpgradeSlotsName(config.upgradeType)
  const { faction, upgradeCards, shipType } = config
  if(actionMap[upgradeType]) {
    return actionMap[upgradeType](faction, upgradeType, upgradeCards, shipType)
  } else {
    // normal cards that do not require special logic
    return upgradeCards[upgradeType]
  }
}

export const determineIfAddButtonIsDisabled = config => {
  const {
    upgrade,
    hasCommanderBeenChosen,
    unavailableUniqueUpgrades,
    targetShipUpgrades,
    targetUpgradeType
  } = config
  const upgradeTitle = upgrade.title
  if(upgrade.set === 'commander'){
    return unavailableUniqueUpgrades[upgradeTitle] || hasCommanderBeenChosen
  } else if(targetShipUpgrades[targetUpgradeType] && targetShipUpgrades[targetUpgradeType].isUnableToBeFilled) {
    return true
  } else {
    return unavailableUniqueUpgrades[upgradeTitle]
  }
}

const commander = (faction: Faction, upgradeType, upgradeCards) => {
  return upgradeCards[upgradeType][faction]
}

const title = (faction: Faction, upgradeType, upgradeCards, shipType) => {
  const cardsToFilter = upgradeCards[upgradeType][faction]
  return cardsToFilter.filter(card => {
    const typeOfShip = shipType
    return card.ship[typeOfShip]
  })
}

const officer = (faction: Faction, upgradeType, upgradeCards) => {
  const cardsToFilter = upgradeCards[upgradeType]
  return cardsToFilter.filter(card => card.faction: Faction === faction: Faction)
}

const actionMap = {
  commander,
  title,
  officer
}
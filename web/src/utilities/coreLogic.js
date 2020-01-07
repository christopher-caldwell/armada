export const determineCardsToBeShown = config => {
  const { upgradeType, faction, upgradeCards, shipType } = config
  if(actionMap[upgradeType]) {
    return actionMap[upgradeType](faction, upgradeType, upgradeCards, shipType)
  } else {
    // normal cards that do not require special logic
    return upgradeCards[upgradeType]
  }
}

export const determineIfAddButtonIsDisabled = config => {
  const { upgrade, hasCommanderBeenChosen, unavailableUniqueUpgrades, targetShipUpgrades, targetUpgradeType } = config
  const upgradeTitle = upgrade.title
  if(upgrade.set === 'commander'){
    return unavailableUniqueUpgrades[upgradeTitle] || hasCommanderBeenChosen
  } else if(targetShipUpgrades[targetUpgradeType] && targetShipUpgrades[targetUpgradeType].isUnableToBeFilled) {
    return true
  } else {
    return unavailableUniqueUpgrades[upgradeTitle]
  }
}

const commander = (faction, upgradeType, upgradeCards) => {
  return upgradeCards[upgradeType][faction]
}

const title = (faction, upgradeType, upgradeCards, shipType) => {
  const cardsToFilter = upgradeCards[upgradeType][faction]
  return cardsToFilter.filter(card => {
    const typeOfShip = shipType
    return card.ship[typeOfShip]
  })
}

const officer = (faction, upgradeType, upgradeCards) => {
  const cardsToFilter = upgradeCards[upgradeType]
  return cardsToFilter.filter(card => card.faction === faction)
}

const actionMap = {
  commander,
  title,
  officer
}
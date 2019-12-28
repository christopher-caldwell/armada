export const determineCardsToBeShown = config => {
  const { upgradeType, faction, upgradeCards } = config
  let selectedUpgradeCardSet
  if(upgradeType === 'commander' || upgradeType === 'officer'){
    selectedUpgradeCardSet = upgradeCards[upgradeType][faction]
  } else {
    selectedUpgradeCardSet = upgradeCards[upgradeType]
  }
  return selectedUpgradeCardSet
}

export const determineIfAddButtonIsDisabled = config => {
  const { upgrade, hasCommanderBeenChosen } = config
  return upgrade.set === 'commander' && hasCommanderBeenChosen
}
export const removeUniqueUpgradeFromList = (upgrade, dispatch) => {
  const upgradeTitle = upgrade.title
  const points = upgrade.points
  const action = 'remove'
  dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action }, { root: true })
  dispatch('fleet/updateFleetPoints', { points, action: 'remove'}, {root: true})
  if(upgrade.set === 'commander'){
    dispatch('fleet/updateCommanderStatus', {}, {root: true})
  }
}

// removing unique upgrades from list in case ship is deleted with uniques equipped
export const removeUpgradesFromShip = (shipToBeRemoved, dispatch) => {
  Object.values(shipToBeRemoved.upgrades).forEach(upgrade => {
    if(upgrade){
      const points = upgrade.points
      upgrade.unique
      ? removeUniqueUpgradeFromList(upgrade, dispatch)
      : dispatch('fleet/updateFleetPoints', { points, action: 'remove'}, {root: true})
    }
  })
}

const doubleUpgradeMap = {
  'offensive-retrofit': {
    dual: true,
    counterpart: 'weapons-team'
  },
  'offensive-retrofit-2': {
    dual: true,
    counterpart: 'weapons-team'
  },
  'weapons-team': {
    dual: true,
    counterpart: 'offensive-retrofit'
  },
  'weapons-team-2': {
    dual: true,
    counterpart: 'offensive-retrofit'
  }
}

const constructDualUpgradePlaceholder = upgradeToBeAdded => {
  const set = doubleUpgradeMap[upgradeToBeAdded.set].counterpart
  const { title } = upgradeToBeAdded
  const upgradeResult = {
    points: 0,
    set,
    isUnableToBeFilled: true,
    title
  }
  return upgradeResult
}

export const determineExtraActionForUpgrade = (dispatch, commit, targetShipId, upgradeToBeAdded) => {
  if (upgradeToBeAdded.unique){
    const upgradeTitle = upgradeToBeAdded.title
    dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action: 'add'}, {root: true})
  }
  dispatch('fleet/addToFleetNotifications', {}, {root: true})
  if(upgradeToBeAdded.set === 'commander'){
    dispatch('fleet/updateCommanderStatus', {}, {root: true})
  } else if(doubleUpgradeMap[upgradeToBeAdded.set]){
    const dualUpgradeToAdd = constructDualUpgradePlaceholder(upgradeToBeAdded)
    commit('ADD_UPGRADE_TO_SHIP', { targetShipId, upgradeToBeAdded: dualUpgradeToAdd })
  }
  commit('ADD_UPGRADE_TO_SHIP', { targetShipId, upgradeToBeAdded })
}


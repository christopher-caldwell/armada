import { Upgrade } from '@/interfaces'

export interface DoubleUpgradeMapOptions {
  isDual: boolean,
  counterpart: 'weapons-team' | 'offensive-retrofit'
}

const doubleUpgradeMap: { [key: string]: DoubleUpgradeMapOptions } = {
  'offensive-retrofit': {
    isDual: true,
    counterpart: 'weapons-team'
  },
  'offensive-retrofit-2': {
    isDual: true,
    counterpart: 'weapons-team'
  },
  'weapons-team': {
    isDual: true,
    counterpart: 'offensive-retrofit'
  },
  'weapons-team-2': {
    isDual: true,
    counterpart: 'offensive-retrofit'
  }
}

const constructDualUpgradePlaceholder = (upgradeToBeAdded: Upgrade) => {
  const set = doubleUpgradeMap[upgradeToBeAdded.set].counterpart
  const { title } = upgradeToBeAdded
  const upgradeResult = {
    points: 0,
    set,
    isUnableToBeFilled: true,
    title,
    dual: true
  }
  return upgradeResult
}

export const removeDualUpgrade = (commit, upgradeToBeRemoved, targetShipId) => {
  const upgradeType = doubleUpgradeMap[upgradeToBeRemoved.set].counterpart
  console.log('dual counterpart', upgradeType)
  commit('REMOVE_UPGRADE_FROM_SHIP', { targetShipId, upgradeType })
}

export const removeUniqueUpgradeFromList = (upgrade, dispatch) => {
  const upgradeTitle = upgrade.title
  const action = 'remove'
  dispatch('fleet/trackUniqueUpgrades', { upgradeTitle, action }, { root: true })
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


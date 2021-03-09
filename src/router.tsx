import React from 'react'
import Canvas from './components/canvas'
import Channels from './components/channels'
import CostStructure from './components/cost-structure'
import CustomerSegments from './components/customer-segments'
import KeyMetrics from './components/key-metrics'
import Problem from './components/problem'
import RevenueStreams from './components/revenue-streams'
import UnfairAdvantages from './components/unfair-advantages'
import UniqueValueProp from './components/unique-value-prop'

const routes = {
  '/': () => <Canvas />,
  '/problem': () => <Problem />,
  '/key-metrics': () => <KeyMetrics />,
  '/unique-value-prop': () => <UniqueValueProp />,
  '/unfair-advantages': () => <UnfairAdvantages />,
  '/channels': () => <Channels />,
  '/customer-segments': () => <CustomerSegments />,
  '/cost-structure': () => <CostStructure />,
  '/revenue-streams': () => <RevenueStreams />,
}

export default routes

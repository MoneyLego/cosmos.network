---
index: 13
title: What are the risks associated with Staking?
description: Staking ATOM is not risk-free.
alt: Article 10
author: 
  name: SAMUEL L. IPSUM
  bio: Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
  img: https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60
tags: 
  - blockchain
  - atom
---

Staking ATOM is not risk-free. ATOM delegated to a validator can be partially slashed (i.e. forfeited without possibility of recovery) should the validator misbehave. On the Cosmos Hub, there are currently two attributable faults that can lead to a slashing event:

- If the validator is offline for too long (missed 500 of the last 10.000 blocks), the ATOM delegated to them will be slashed by 0.01%. As a delegator, it is important to delegate to validators with good uptime to minimize the risk of being slashed from this fault. 
- If the validator signs two different blocks at the same height, the ATOM delegated to them will be slashed by 5%. This fault is harder to anticipate, as it can result from bad operation practices or outright malicious intent from the validator operator. Delegators should make sure that the validators in order to prevent slashing from this fault. 
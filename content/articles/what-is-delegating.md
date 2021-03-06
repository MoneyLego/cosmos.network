---
index: 8
title: What is delegating?
description: Blockchains that use staking, such as the Cosmos Hub, are primarely operated by a set of actors called validators.
alt: Article 10
author: 
  name: SAMUEL L. IPSUM
  bio: Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
  img: https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60
tags: 
  - blockchain
  - atom
---

Blockchains that use staking, such as the Cosmos Hub, are primarely operated by a set of actors called [validators](/learn/faq/what-is-a-validator). The status of a validator (active or candidate), as well as its weight is established based on its amount of voting power. Voting power is obtained when ATOMs are locked up in the process of staking, and must be granted to a validator or validator candidate. This is called delegating. 

In practice, delegating is done automatically when ATOM holders start staking. A single staking transaction needs to be sent for the whole proces of locking up ATOMs and delegating to validator(s) via a [wallet]. Users will generally only be asked for the amount of ATOMs to stake and the validator(s) they want to delegate to. The Wallet will take care of the rest (i.e. generating and sending the transaction).

Note that validators never obtain custody of the ATOMs delegated to them. There is no risk for validators to "steal" their delegators ATOM. However, there is a risk for delegated ATOMs to be slashed should the validator they are delegated to misbehave. See [What are the risks associated with Staking] for more. 
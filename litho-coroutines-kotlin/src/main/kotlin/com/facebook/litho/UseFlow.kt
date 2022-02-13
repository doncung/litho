/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho

import com.facebook.litho.annotations.Hook
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.collect

/**
 * Uses the current value of a given [stateFlow] in a Litho Kotlin component.
 *
 * The flow will be collected on the CoroutineScope given by [getTreeProp], and will be canceled
 * when this component is detached.
 */
@Hook
fun <T> ComponentScope.useFlow(stateFlow: StateFlow<T>): T =
    useFlow(initialValue = { stateFlow.value }, stateFlow)

/**
 * Uses the collection of a given [flow] in a Litho Kotlin component, with a provided initial value.
 *
 * The flow will be collected on the CoroutineScope given by [getTreeProp], and will be canceled
 * when this component is detached.
 */
@Hook
fun <T> ComponentScope.useFlow(initialValue: () -> T, flow: Flow<T>): T =
    useProducer(initialValue, flow) { flow.collect { update(it) } }

/**
 * Uses the collection of a flow that is dynamically supplied by [flowBlock], which will be executed
 * whenever the given [keys] change.
 *
 * The flow will be collected on the CoroutineScope given by [getTreeProp], and will be canceled
 * when this component is detached or if any [keys] change.
 */
@Hook
fun <T> ComponentScope.useFlow(
    initialValue: () -> T,
    vararg keys: Any?,
    flowBlock: () -> Flow<T>,
): T = useProducer(initialValue, *keys) { flowBlock().collect { update(it) } }
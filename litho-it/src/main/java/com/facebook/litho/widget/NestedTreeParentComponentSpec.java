/*
 * Copyright (c) Facebook, Inc. and its affiliates.
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

package com.facebook.litho.widget;

import com.facebook.litho.Component;
import com.facebook.litho.ComponentContext;
import com.facebook.litho.LifecycleStep;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.annotations.OnCreateLayout;
import com.facebook.litho.annotations.OnCreateTreeProp;
import com.facebook.litho.annotations.Prop;
import com.facebook.yoga.YogaEdge;

@LayoutSpec
public class NestedTreeParentComponentSpec {

  public static final String ROOT_KEY = "NestedTreeParentComponent";

  @OnCreateTreeProp
  public static B onCreateTreeProp(ComponentContext c) {
    return new B();
  }

  @OnCreateLayout
  static Component onCreateLayout(
      ComponentContext c, @Prop(optional = true) LifecycleStep crashFromStep) {
    return NestedTreeComponent.create(c)
        .paddingPx(YogaEdge.ALL, 5)
        .crashFromStep(crashFromStep)
        .key("NestedTreeComponent")
        .build();
  }

  public static NestedTreeParentComponent create(ComponentContext c) {
    return NestedTreeParentComponent.create(c).key(ROOT_KEY).build();
  }

  public static class B {}
}
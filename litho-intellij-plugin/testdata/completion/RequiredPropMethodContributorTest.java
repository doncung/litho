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

class RequiredPropMethodContributorTest {

  void testCompletion() {
    MyComponent.crea<caret>
  }

  static class ComponentLifecycle {}

  static class MyComponent extends ComponentLifecycle {

    static void create(com.facebook.litho.ComponentContext c) {}

    void second() {}

    static class Builder {

      @com.facebook.litho.annotations.RequiredProp(value="one")
      void one() {}

      void two() {}

      @com.facebook.litho.annotations.RequiredProp(value="three")
      void three() {}

      @com.facebook.litho.annotations.RequiredProp(value="three")
      void threeRes() {}
    }
  }
}
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

package com.facebook.litho;

import android.graphics.Rect;
import androidx.annotation.Nullable;
import com.facebook.infer.annotation.Nullsafe;
import com.facebook.rendercore.RenderTreeNode;

@Nullsafe(Nullsafe.Mode.LOCAL)
public class RenderTreeNodeUtils {

  static RenderTreeNode create(
      final LithoRenderUnit unit,
      final Rect bounds,
      final @Nullable LithoLayoutData layoutData,
      final @Nullable RenderTreeNode parent) {

    return new RenderTreeNode(
        parent, unit, layoutData, bounds, null, parent != null ? parent.getChildrenCount() : 0);
  }
}
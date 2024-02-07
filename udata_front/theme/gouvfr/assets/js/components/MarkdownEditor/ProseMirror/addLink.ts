import type { Mark } from "prosemirror-model";
import { EditorView } from "prosemirror-view";

export function addLink(view: EditorView, mark: Mark, previousMark?: Mark | null) {
  const tr = view.state.tr;
  if (previousMark) {
    tr.removeMark(view.state.selection.from, view.state.selection.to, previousMark);
  }

  tr.addMark(view.state.selection.from, view.state.selection.to, mark);
  view.dispatch(tr);
}

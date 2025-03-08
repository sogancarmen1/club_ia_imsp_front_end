import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext"
import { FORMAT_TEXT_COMMAND } from "lexical";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { $getSelection, $isRangeSelection } from "lexical";
import { useDashboard } from "@/app/context/dashboardContext";
import {$setBlocksType} from "@lexical/selection"
import {$createHeadingNode} from "@lexical/rich-text"
import { mergeRegister } from "@lexical/utils";
import { useDebouncedCallback } from "use-debounce";

export default function Toolbars() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const {setContent, content} = useDashboard();

    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            //lost+found/ Update text format
            setIsBold(selection.hasFormat("bold"));
            setIsItalic(selection.hasFormat("italic"));
        }
    }, []);

    const handleSave = useDebouncedCallback((content) => {
        setContent(content);
    }, 500);

    useEffect(() => {
        mergeRegister(
        editor.registerUpdateListener(({editorState, dirtyElements, dirtyLeaves}) => {
            editorState.read(() => {
                $updateToolbar();
            });
            if (dirtyElements.size === 0 && dirtyLeaves.size === 0) {
                return;
            }
            handleSave(JSON.stringify(editorState));
        }));
    }, [editor, $updateToolbar]);

    const handleHeading = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                // Update text format
                $setBlocksType(selection, () => $createHeadingNode("h1"));
            }
        });
    };

    return (
        <div className="space-x-3 border-b">
            <button onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
            }} className={`size-8 rounded-md ${isBold ? "bg-gray-200" : ""}`} >
              B
            </button>
            <button className={`size-8 rounded-md italic ${isItalic ? "bg-gray-200" : ""}`} onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
            }}>
              i
            </button>
            <button onClick={handleHeading} className={` size-8 rounded-md `}>
               h1
            </button>
        </div>
    )
}

import { saveAs } from "file-saver";
import { formatFileName } from "./shared";

function formatDataToJSON(messages, namespace) {
  const formattedMessages = messages.map((item) => ({
    namespace: namespace,
    ...item,
  }));
  return JSON.stringify(formattedMessages);
}

export function downloadJSON(taskCode, messages, namespace) {
  var blob = new Blob([formatDataToJSON(messages, namespace)], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, `${formatFileName(taskCode, "json")}`);
}

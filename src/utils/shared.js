export function removeTaskCodeSymbol(taskCode) {
  return taskCode.replace("-", "");
}

export function formatFileName(taskCode, type) {
  return `${removeTaskCodeSymbol(taskCode)}.${type}`;
}

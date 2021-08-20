import { saveAs } from "file-saver";
import { removeTaskCodeSymbol, formatFileName } from "./shared";

function defineMessageMethod(namespace) {
  console.log(namespace);
  if (namespace === "general") {
    return "DM";
  }
  if (namespace === "iam") {
    return "CRM";
  }
  return namespace.toUpperCase();
}

function formatDataToJava(owner, taskCode, namespace) {
  return `package com.cvortex.message.migration.changesets.${namespace};

import com.cvortex.message.migration.changesets.BaseChangeLog;
import com.cvortex.message.service.MessageService;
import com.github.cloudyrock.mongock.ChangeLog;
import com.github.cloudyrock.mongock.ChangeSet;
import java.io.IOException;

@ChangeLog
public class ${removeTaskCodeSymbol(taskCode)} extends BaseChangeLog {

    @ChangeSet(id = "${namespace.toUpperCase()}-${removeTaskCodeSymbol(
    taskCode
  )}", order = "001", author = "${owner}")
    public void create${defineMessageMethod(
      namespace
    )}Messages(MessageService messageService) throws IOException {
        execute(messageService);
    }
}`;
}

export function downloadJava(owner, taskCode, namespace) {
  var blob = new Blob([formatDataToJava(owner, taskCode, namespace)], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, `${formatFileName(taskCode, "java")}`);
}

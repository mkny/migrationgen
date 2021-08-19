function removeTaskCodeSymbol(taskCode) {
  return taskCode.replace("-", "");
}

function formatFileName(taskCode) {
  return `${removeTaskCodeSymbol(taskCode)}.java`;
}

function formatDataToJava(owner, taskCode, namespace) {
  return `
    package com.cvortex.message.migration.changesets.${namespace};

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
    public void create${namespace.toUpperCase()}Messages(MessageService messageService) throws IOException {
        execute(messageService);
    }
}
`;
}

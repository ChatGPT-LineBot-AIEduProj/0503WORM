# 读取bib文件
with open("logs.bib", "r") as f:
    logs = bibtexparser.load(f)

# 提取uID和msg
data = []
for log in logs.entries:
    uID = log.get("user_id")
    msg = log.get("system_message")
    
    # 将uID和msg存储到列表中
    data.append((uID, msg))
    
    # 将uID和msg写入文本文件
    with open("data.txt", "a") as f:
        f.write("{}\t{}\n".format(uID, msg))
    
    # do something with uID and msg

# 打印所有的uID和msg
for uID, msg in data:
    print("{}\t{}".format(uID, msg))

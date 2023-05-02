// 載入JSON文件
fetch('Questions.json')
  .then(response => response.json())
  .then(data => {
    // 獲取問題1的答案
    const q1Answer = data.q1.a;
    // 獲取問題1的問題內容
    const q1Question = data.q1.q;
    // 獲取問題2的答案
    const q2Answer = data.q2.a;
    // 獲取問題2的問題內容
    const q2Question = data.q2.q;

    // 將答案插入到HTML中
    document.getElementById('q1-answer').textContent = q1Answer;
    document.getElementById('q2-answer').textContent = q2Answer;

    // 將問題插入到HTML中
    document.getElementById('q1-question').textContent = q1Question;
    document.getElementById('q2-question').textContent = q2Question;
  });

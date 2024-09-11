import React, { useState, useEffect } from 'react';

// 定义 CountdownTimer 组件
const CountdownTimer = () => {
  // 初始化倒计时状态
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // 初始化今天是否是周三的状态
  const [isTodayWednesday, setIsTodayWednesday] = useState(false);

  // 获取当前日期和时间的函数
  const getCurrentTime = () => {
    const now = new Date();
    return now;
  };

  // 计算倒计时时间的函数
  const calculateCountdown = (targetDate) => {
    const now = getCurrentTime();
    const difference = targetDate - now;

    // 如果倒计时结束，重置状态
    if (difference <= 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      // 计算剩余的天、小时、分钟和秒数
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // 更新倒计时状态
      setCountdown({ days, hours, minutes, seconds });
    }
  };

  // 获取下周三日期的函数
  const getNextWednesday = () => {
    const today = new Date();
    let day = today.getDay(); // 获取今天是星期几
    let diff = 0;

    // 判断今天是否是周三
    if (day === 3) {
      setIsTodayWednesday(true);
      diff = 0; // 如果是周三，倒计时到当天结束
    } else {
      setIsTodayWednesday(false);
      diff = 3 - day; // 计算到下周三的天数
      // 如果今天比周三大，计算下周的天数
      if (diff <= 0) diff += 7; 
    }

    // 获取下周三的日期
    const nextWednesday = new Date(today);
    nextWednesday.setDate(today.getDate() + diff);
    nextWednesday.setHours(23, 59, 59, 999);
    return nextWednesday;
  };

  // 使用 useEffect 启动和清除定时器
  useEffect(() => {
    const nextWednesday = getNextWednesday();

    const intervalId = setInterval(() => {
      calculateCountdown(nextWednesday);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 根据当前日期渲染不同的内容
  return (
    <div>
      {isTodayWednesday? (
        <p>活动进行中，距离结束还剩 {countdown.hours.toString().padStart(2, '0')}:{countdown.minutes.toString().padStart(2, '0')}:{countdown.seconds.toString().padStart(2, '0')}</p>
      ) : (
        <p>下次活动 {new Date(getNextWednesday).toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' })}，敬请期待</p>
      )}
    </div>
  );
};

// 导出 CountdownTimer 组件
export default CountdownTimer;

export const timeForToday = (dateStr: string): string => {
    const today = new Date();
    const timeValue = new Date(dateStr);

    const betweenTime = Math.floor(
        (today.getTime() - timeValue.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
        return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 31) {
        return `${betweenTimeDay}일 전`;
    }

    const betweenTimeWeek = Math.floor(betweenTime / 60 / 24 / 7);
    if (betweenTimeWeek < 5) {
        return `${betweenTimeWeek}주 전`;
    }

    const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 7 / 12);
    if (betweenTimeMonth < 13) {
        return `${betweenTimeMonth}개월 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

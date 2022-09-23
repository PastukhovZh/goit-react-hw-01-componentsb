import { StatisticsWrap,Title, StatsList, StatsItem } from "./Statistics.styled"
export const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrap>
           {title && <Title>{title}</Title>} 
  <StatsList>
        {stats.map(({ id, label, percentage }) =>(
            <StatsItem key = {id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatsItem>
         ))}
  </StatsList>
</StatisticsWrap>
    )
}
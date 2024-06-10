import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0))

    setGraph(graphData)
  }, [data])


  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie 
          data={graph} 
          innerRadius={50} 
          padding={{top: 20, bottom: 20, left: 80, right: 80}}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff8dc',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#fff8dc',
            }
          }}
          />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar 
            alignment='start' 
            style={{ 
              data: { fill: "#50FA7B" },                                     
            }}
            data={graph}
          />

          <VictoryAxis style={{
            axis: { stroke: "#fff8dc" },
            axisLabel: { fontSize: 20, padding: 30, fill: "#fff8dc" },

            ticks: { stroke: "#fff8dc", size: 5, },
            tickLabels: { fontSize: 15, padding: 5, fill: "#fff8dc" }
          }}/>

        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs

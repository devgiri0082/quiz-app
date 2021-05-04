export default function Table({question, answer, choice}) {
    return (
        <tr>
            <td className = "question">{question}</td>
            <td>{answer}</td>
            <td style={{background:answer===choice?"green":"red", minWidth: "150px"}}>{choice}</td>
         </tr>
    )
}
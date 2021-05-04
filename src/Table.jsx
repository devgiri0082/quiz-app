export default function Table({question, answer}) {
    return (
        <tr>
            <td className = "question">{question}</td>
            <td>{answer}</td>
         </tr>
    )
}
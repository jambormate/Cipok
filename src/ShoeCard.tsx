import "./cipostilus.css"

export interface ShoeCardProps {
    model: string
    brand: string
    isLimitedEdition: boolean
    releaseYear: number
    sports: string[]
}

function ShoeCard({
    model,
    brand,
    isLimitedEdition,
    releaseYear,
    sports,
}: ShoeCardProps) {
    const cardStyle = {
        backgroundColor: isLimitedEdition ? "#FFD700" : "#f2f2f2",
        color: isLimitedEdition ? "#000" : "#333",
    }

    return (
        <article className="card h-100" style={cardStyle}>
            <div className="card-body">
                <h2 className="card-title kiemelt">{model}</h2>
                <p><strong>Márka:</strong> {brand}</p>
                <p><strong>Megjelenés éve:</strong> {releaseYear}</p>
                <p><strong>Kapcsolódó sportok:</strong> {sports.join(", ")}</p>
                <p className="edition-status">
                    {isLimitedEdition
                        ? "Ez egy limitált kiadású modell."
                        : "Ez egy általánosan elérhető modell."}
                </p>
            </div>
        </article>
    )
}

export default ShoeCard

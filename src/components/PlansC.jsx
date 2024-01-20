import React from 'react'
import '../css/PlansC.css'

const PlansC = () => {
  return (
    <body>

        <header>
            <h1>Planes de Cuidado Veterinario</h1>
        </header>

        <section>
            <div class="plan">
            <h2>Plan para Mascotas de 0 a 5 Años</h2>
            <p><strong>Precio:</strong> $60/mes</p>
            <ul>
                <li>Vacunación Completa</li>
                <li>Chequeos Regulares</li>
                <li>Control de Parásitos</li>
                <li>Asesoramiento Nutricional</li>
                <li>Descuentos en Estética</li>
            </ul>
            <a href="" className="plan-button">Obtener Plan</a>
            </div>

            <div class="plan">
            <h2>Plan para Mascotas de 5 a 10 Años</h2>
            <p><strong>Precio:</strong> $50/mes</p>
            <ul>
                <li>Chequeos Anuales</li>
                <li>Detección Temprana de Problemas</li>
                <li>Vacunas de Refuerzo</li>
                <li>Descuentos en Cirugías Programadas</li>
                <li>Seguro de Emergencia</li>
            </ul>
            <a href="" className="plan-button">Obtener Plan</a>
            </div>

            <div class="plan">
            <h2>Plan para Mascotas Mayores de 10 Años</h2>
            <p><strong>Precio:</strong> $40/mes</p>
            <ul>
                <li>Chequeos Semestrales</li>
                <li>Perfil de Sangre Completo</li>
                <li>Suplementos Nutricionales</li>
                <li>Fisioterapia Especializada</li>
                <li>Descuentos en Medicamentos Continuos</li>
            </ul>
            <a href="" className="plan-button">Obtener Plan</a>
            </div>
        </section>

    </body>
  )
}

export default PlansC
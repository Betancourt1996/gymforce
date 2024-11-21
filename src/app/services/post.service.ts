import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Datos estáticos quemados
  private data = [
    {
      id: 1,
      titulo: "Entrenamiento Diario",
      fecha: '21/11/2024',
      imgPath: 'images/entrenamiento.png',
      texto: `<p>Beneficios del Entrenamiento Diario 💪</p>
      <p>Hacer ejercicio a diario no solo mejora tu condición física, sino también tu salud mental y emocional. Una rutina constante te ayuda a aumentar tu energía, fortalecer tu sistema inmunológico y reducir el estrés. Además, el entrenamiento regular mejora la calidad del sueño, acelera tu metabolismo y tonifica tus músculos, dándote esa sensación de bienestar que impulsa tu día. 🏋️‍♂️✨</p>
      <p>Tips para una Rutina Efectiva 📋
        1️⃣ Establece horarios fijos para entrenar y conviértelos en parte de tu día.
        2️⃣ Mezcla ejercicios cardiovasculares con fuerza para un entrenamiento completo.
        3️⃣ Hidrátate bien y lleva una dieta equilibrada que complemente tu rutina.
        4️⃣ Escucha a tu cuerpo; descansa cuando sea necesario para evitar lesiones.</p>
        <p>La clave está en la constancia y en adaptar tu rutina a tus objetivos personales. 🎯🏃‍♀️</p>
        <p>¿Por qué elegir Force Gym? 🏋️‍♀️</p>
        <p>En Force Gym, te ofrecemos todo lo que necesitas para alcanzar tus metas: entrenadores certificados, equipos modernos y un ambiente motivador. Aquí encontrarás un espacio diseñado para retarte y superar tus límites, rodeado de personas que comparten tu misma pasión por el fitness. ¡Ven y vive la experiencia Force Gym! 💥</p>
        <p>Tu transformación comienza hoy. ¡Te esperamos! 💪</p>`
    },
    {
      id: 2,
      titulo: "Vida Saludable",
      fecha: '28/11/2024',
      imgPath: 'images/vida_saludable.jpeg',
      texto: `<p>¿Cómo Lograr una Vida Saludable? 🌟</p>
      <p>Tener una vida saludable no solo se trata de verte bien, sino de sentirte increíble por dentro y por fuera. Combinar ejercicio regular con una alimentación balanceada es la clave para mantener un cuerpo fuerte, una mente clara y un espíritu positivo. 🌈💪</p>
      <p>Ejercicio y Nutrición: La Pareja Perfecta 💚</p>
      <p>El ejercicio diario te ayuda a mejorar tu condición física, liberar estrés y aumentar tu energía. Complementarlo con una alimentación adecuada, rica en nutrientes esenciales, garantiza que tu cuerpo tenga todo lo necesario para rendir al máximo. Este equilibrio fortalece tu sistema inmune, regula tu peso y mejora tu calidad de vida. 🥗🏋️‍♂️</p>
      <p>En Force Gym Te Ayudamos a Lograrlo 💥</p>
      <p>En Force Gym, estamos comprometidos con tu bienestar. Te ofrecemos rutinas personalizadas y asesoramiento nutricional para alcanzar tus metas de manera efectiva. Con el apoyo de nuestros entrenadores y un ambiente motivador, convertirás tus objetivos en resultados reales. ¡Ven y vive el cambio hacia una vida saludable con nosotros! 💪✨</p>
      <p>Tu transformación comienza en Force Gym. ¡Te esperamos! 🏃‍♀️💚</p>`
    },
    {
      id: 3,
      titulo: "Cardio y Sus Beneficios",
      fecha: '07/12/2024',
      imgPath: 'images/cardio.jpeg',
      texto: `<p>Cardio y Sus Beneficios: ¡Transforma Tu Vida! 🏃‍♂️💓</p>
      <p>El ejercicio cardiovascular es una de las mejores formas de mantener tu corazón sano y tu cuerpo en movimiento. Al practicar cardio regularmente, mejoras tu resistencia, quemas calorías, reduces el estrés y fortaleces todo tu sistema cardiovascular. Es la manera perfecta de activar tu cuerpo y sentirte lleno de energía cada día. 💪✨</p>
      <p>Beneficios del Cardio 🏋️‍♀️
      1️⃣ Fortalece el corazón y los pulmones, mejorando tu salud en general.
      2️⃣ Quema calorías de forma eficiente, ayudándote a alcanzar tus metas de peso.
      3️⃣ Reduce el estrés y mejora tu estado de ánimo gracias a la liberación de endorfinas.
      4️⃣ Aumenta tu resistencia y energía, haciéndote sentir más fuerte en tu día a día</p>
      <p>¡En Force Gym Tenemos Planes para Ti! 💥</p>
      <p>En Force Gym, diseñamos planes de cardio personalizados que se adaptan a tus necesidades y objetivos. Con el equipo más moderno, entrenadores expertos y un ambiente motivador, te ayudaremos a transformar tu vida y alcanzar el mejor estado físico de tu vida. ¡Es momento de dar el primer paso! 🚴‍♀️🔥</p>
      <p>Tu cambio comienza aquí. ¡Únete a Force Gym y vive la experiencia! 🏃‍♀️❤️</p>`
    }
  ];

  constructor() { }

  getTodosPost(): Observable<any> {
    let muchosPosts = [...this.data, ...this.data];
    return of(muchosPosts);
  }
  getUltimosPost(): Observable<any> {
    return of(this.data.slice(0, 3));
  }
  getPostPorId(idPost: number): Observable<any> {
    const foundPost = this.data.find(post => post.id === idPost);
    return of(foundPost);
  }
}

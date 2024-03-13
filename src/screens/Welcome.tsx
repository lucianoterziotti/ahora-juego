import {SafeAreaView, ScrollView, Text} from 'dripsy';

const Welcome = () => {
  return (
    <ScrollView sx={styles.container}>
      <SafeAreaView>
        <Text sx={styles.welcomeText}>
          Juego del Ahora, el Ajedrez de hoy. El Ajedrez es un juego milenario,
          según se conoce dataría del siglo VI dC. Por ello se observa en el
          mismo un espíritu concordante con dicha época. Conquistas, reinos,
          guerras, la vida tal como se vivía en aquellos años. Un bello y
          fascinante juego que se expandió por el mundo a lo largo de los
          siglos. Sufrió modificaciones en cuanto al formato del tablero,
          cantidad y disposición de las piezas ... y llegó el día en que se
          propone otro tipo de cambio, un cambio en el espíritu, en la esencia
          del juego. Si el ajedrez es disfrutado por millones de personas día a
          día, por qué no ofrecer a ellos una variación que tenga que ver con el
          mundo actual? Hemos evolucionado, las guerras son residuos de un
          pasado que se está transformando. La gente de hoy está yendo hacia
          Adentro, hacia la Unidad con sus semejantes, con la naturaleza.
          Estamos despertando; cada vez más gente está revolucionando el mundo
          hacia un cambio de fondo, buscamos la Paz, la Hermandad, reconectarnos
          con nosotros mismos y con el Planeta. El juego del Ahora plantea un
          cambio de paradigma, jugar al ajedrez con la misma alegría de siempre,
          pero con otro objetivo. No hay que vencer al oponente, matar al rey,
          comerle todo, destruirlo, darle jaque mate. Solo llegar hasta quién
          está del otro lado del tablero en señal de amistad. Como en un juego
          de niños de mancha o escondida, divertirse, soltarse en el tablero,
          mover las piezas con el único objetivo de llegar a la pieza que
          representa el Ser interior, la Divinidad del otro participante, en
          señal de amistad, de Paz. Llegue uno u otro es indistinto. Todos ganan
          y nadie pierde, solo dos seres se unen fraternalmente. No es una
          competencia sino una diversión. Con el tiempo cuando seamos más
          evolucionados hasta dejaremos de jugar uno frente al otro y jugaremos
          solamente con un ordenador, y aún más evolucionados guardaremos con
          cariño este juego dejándolo como una parte la historia y pasando a
          divertirnos con cosas que aún no estamos listos para disfrutar…
          Demosle la oportunidad al cambio, a jugar un juego acorde al espíritu
          que está despertando en la humanidad. Humildemente es ofrecido al
          mundo para que llegue a todos los rincones y quizá ayude en algo a la
          construcción de una nueva Tierra, un mundo de Paz, Amor y Felicidad.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cambia el color de fondo a blanco
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
};

export default Welcome;

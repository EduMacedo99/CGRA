/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init();
        this.scaleFactor = 0.5;
        this.light = new CGFlight(this.scene, 1);
        this.light.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.light.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.light.setDiffuse(0.8, 0.8, 0.8, 1.0);
    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()

    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene)
        };
        // copia o axioma da cena para iniciar a sequência de desenvolvimento
        this.axiom = "X";

        // cria as producoes
        this.productions={
          "F": [ "FF" ],
          "X": ["F[-X][X]F[-X]+FX"]                  
        };

        // angulo de rotacao 25
        this.angle = 25 * Math.PI / 180;

        // numero de iteracoes
        this.iterations = 3;

        // escalamento dos elementos dependente do numero de iteracoes
        this.scale = Math.pow(0.5, this.iterations-1);

        // desenvolve a sequencia de desenvolvimento do Sistema L
        this.iterate();
    }
    // desenvolve o axioma ao longo de uma sequência de desenvolvimento com um determinado número de iterações
    iterate(){
        var i, j;
        for (i=0; i < this.iterations; ++i){
            var newString = "";

            // substitui cada um dos caracteres da cadeia de caracteres de acordo com as produções
            for (j=0; j<this.axiom.length; ++j){
                var axiomProductions=this.productions[this.axiom[j]];
                // aplicar producoes
                if (axiomProductions === undefined){
                    // caso nao se aplique nenhuma producao deixa estar o caracter original
                    newString += this.axiom[j];
                }else if (axiomProductions.length == 1) {
                    // caso apenas exista uma producao, aplica-a
                    newString += axiomProductions[0];
                } else {
                    // sistema estocastico - varias producoes sao aplicaveis - seleciona aleatoriamente
                    newString += axiomProductions[Math.floor(((Math.random() * 10000)) % 1.0 * axiomProductions.length)];                    
                }
            }

            this.axiom = newString;
        }
    }
    // dá inicio à animação do relampago
    startAnimation(t){
      this.axiom = "X"; //recriar axioma
      this.iterate();
      this.iterateStep = this.depth = this.axiom.length / (1000 / this.scene.updatePeriod);
      this.startT = t;
      this.end = false;
      this.x = 13 - (Math.random() * 100) % 26;
      this.z = 13 - (Math.random() * 10000) % 26;

      //iluminar
      this.light.setPosition(this.x, 15.1, this.z);
      this.light.enable();
      this.light.update();
    }
    update(t){
      this.depth += this.iterateStep;
      if((t - this.startT) >= 1000 && !this.end) {
        this.light.disable();
        this.light.update();
        this.end = true;
      }
    }
    display(){
        this.light.update();
        this.scene.pushMatrix();
        this.scene.translate(this.x, 15, this.z);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.scale(this.scale, this.scale, this.scale);

        var i, depth = this.depth;
        this.scene.lightningTxt.apply();


        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length && !this.end; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda ZZ
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita ZZ
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "\\":
                    // roda a esquerda XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    // roda a direita XX
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    // roda a esquerda YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // roda a direita YY
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive  && depth > 0)
                    {           
                        this.scene.pushMatrix();  
                        this.scene.scale(0.25, 2, 1);
                        this.scene.translate(0.5, 0.5, 0);
                        primitive.display();
                        this.scene.popMatrix();
                        this.scene.translate(0, 2, 0);
                        depth--;
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}
/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init();
        this.scaleFactor = 0.5;
    }

    init(){
        // cria o lexico da gramática
        this.initGrammar()

    }

    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
        // copia o axioma da cena para iniciar a sequência de desenvolvimento
        this.axiom = "X";

        // cria as producoes
        this.productions={
          "F": [ "FF" ],
          "X": ["F[-X][X]F[-X]+FX", "F[-X][X]+X", "F[+X]-X", "F[/X][X]F[\\X]+X", "F[\X][X]/X", "F[/X]\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X" ]                  
        };

        // angulo de rotacao 30
        this.angle = Math.PI / 6;

        // numero de iteracoes
        this.iterations = 4;

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

    display(){
        this.scene.pushMatrix();
        this.scene.scale(2*this.scale, 2*this.scale, 2*this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

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

                    if ( primitive )
                    {
                        if(this.axiom[i] == "F"){
                          this.scene.branchTxt.apply();
                          primitive.display();
                        }
                        else if(this.axiom[i] == "X"){
                          this.scene.leavesTxt.apply();
                          this.scene.pushMatrix();
                          this.scene.scale(2, 2, 2);
                          primitive.display();
                          this.scene.popMatrix();
                        }
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}
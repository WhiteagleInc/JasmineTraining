describe('calculator.js', function() {
    describe('Calculator', function(){
                beforeEach(function() { 
            calculator = new Calculator();
            calculator2 = new Calculator();

            this.calculator = calculator;
            this.calculator2 = calculator2;
        });

        afterEach(function() {

        });

        describe('', function() {
            it('instanciates unique object', function() {
                expect(this.calculator).not.toBe(this.calculator2);
            });
        
            it('has common operations not undefined', function() {       
                expect(this.calculator.add).not.toBeUndefined();
                expect(this.calculator.subtract).not.toBeUndefined();
                expect(this.calculator.multiply).not.toBeUndefined();
                expect(this.calculator.divide).not.toBeUndefined();
            });
        
            it('has common operations defined', function() {
                expect(this.calculator.add).toBeDefined();
                expect(this.calculator.subtract).toBeDefined();
                expect(this.calculator.multiply).toBeDefined();
                expect(this.calculator.divide).toBeDefined();
            });
        
            it('can overwrite total', function() {
                calculator.total = null;
                expect(this.calculator.total).toBeNull();
            });

            it('should initialize the total', function() {
                expect(this.calculator.total).toBe(0);
            });
        
            it('has constructor', function() {
                expect(this.calculator).toEqual(this.calculator2);
            });
        
            it('can be instantiated', function() {
                jasmine.addMatchers(customMatchers);
        
                expect(this.calculator).toBeCalculator();
                expect(this.calculator).toBeTruthy();
                expect(this.calculator2).toBeTruthy();
                expect(this.calculator).toEqual(this.calculator2);
                expect(this.calculator.constructor.name).toContain("Calc");
            });
        });

        describe('add()', function() {
            it('should add numbers to total', function() {
                this.calculator.add(5);
        
                expect(this.calculator.total).toBe(5);
            });

            it('returns total', function() {
                this.calculator.total = 50;
        
                expect(this.calculator.add(20)).toBe(70);
                expect(this.calculator.total).toMatch(/-?\d+/);
                expect(typeof this.calculator.total).toMatch('number');
            });
        
            it('returns total 2', function() {
                this.calculator.total = 50;
        
                expect(this.calculator.add(20)).toBe(70);
                expect(this.calculator.total).toMatch(/-?\d+/);
                expect(typeof this.calculator.total).toMatch('number');
                expect(this.calculator.total).toBeNumber();
        
                expect(this.calculator.total).toEqual(jasmine.anything());
                expect(function() {}).toEqual(jasmine.anything());
                //expect(null).toEqual(jasmine.anything());
                //expect(undefined).toEqual(jasmine.anything());
            });
        });

        describe('susbtract()', function() {
            it('should subtract numbers to total', function() {
                this.calculator.total = 30;
                this.calculator.subtract(5);
        
                expect(this.calculator.total).toBe(25);
            });
        });

        describe('multiply()', function() {
            it('should multiply total by number', function() {
                this.calculator.total = 100;
                this.calculator.multiply(2);
        
                expect(this.calculator.total).toBe(200);
            });

            it('does not handle NaN', function() {
                this.calculator.total = 20;
                this.calculator.multiply('a');
        
                expect(this.calculator.total).toBeNaN();
            });
        });

        describe('divide', function() {
            it('should divide total by number', function() {
                this.calculator.total = 200;
                this.calculator.divide(2);
        
                expect(this.calculator.total).toBe(100);
            });

            it('handles divide by zero', function() {
                expect(function() { this.calculator.divide(0) }).toThrow();
                expect(function() { this.calculator.divide(0) }).toThrowError(Error);
                expect(function() { this.calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
            });
        });

        describe('get version', function() {
            it('fetches version from external source', async function(done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));
            
                const version = await calculator.version;
                expect(version).toBe('0.1');
                
                done();
            });
        });
    });
});
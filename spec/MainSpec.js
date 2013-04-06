describe("Loop countdown - ", function() {
  var cmds;
  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    cmds = getCommands();
  })

 

  it('have input', function(){
    expect($('#input-a').css('display')).toBe("block");
  });

  it('when put number then submit count from 1 to input', function(){
    $('#input-a input').val('10');
    onSubmit();
    expect($('#item0').html()).toBe("1");
    expect($('#item1').html()).toBe("2");
    expect($('#item2').html()).toBe("3");
    expect($('#item3').html()).toBe("4");
    expect($('#item4').html()).toBe("5");
    expect($('#item5').html()).toBe("6");
    expect($('#item6').html()).toBe("7");
    expect($('#item7').html()).toBe("8");
    expect($('#item8').html()).toBe("9");
    expect($('#item9').html()).toBe("10");
    expect($('#item10').length).toBe(0);    
  });

  it('if input is not a number echo "{input} is not a number"', function(){
      $('#input-a input').val('kk');
      onSubmit();
      expect($('#item0').html()).toBe('"kk" is not a number');
  });

  it('clear input every time you submit', function(){
      $('#input-a input').val('1');
      onSubmit();
      expect($('#item0').html()).toBe("1");
      $('#input-a input').val('ll');
      onSubmit();
      expect($('#item0').html()).toBe("input is not a number");      
      expect($('#item1').length).toBe(0);

  });

  it('clear input value every time you submit', function(){
      $('#input-a input').val('1');
      onSubmit();
      expect($('#input-a input').val()).toBe("");
  });

});
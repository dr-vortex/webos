avascript:os.fs.createFile('/init', 'w+', 0o777, (e)=>e ? os.terminal.writeln('Error:'  + e) : os.fs.writeFile('/init', `#import io\nprintln('Hello')`, 'utf8', 'w+', 0o777, (e, f)=>os.terminal.writeln(e ? 'Error: ' + e : 'Wrote')))
avascript:os.fs.createFile('/init', 'w+', 0o777, ()=>os.fs.writeFile('/init', `#import io\nprintln('Hello')`, 'utf8', 'w+', 0o777, (e, f)=>os.terminal.writeln(e ? 'Error: ' + e : 'Wrote')))
avascript:os.fs.writeFile('/init', `#import io\nprintln('Hello')`, 'utf8', 'w+', 0o777, (e, f)=>os.terminal.writeln(e ? 'Error: ' + e : 'Wrote'))
avascript:alert(os.fs.readdirSync('/'))
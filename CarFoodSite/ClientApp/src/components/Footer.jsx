import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer class="bg-light py-5">
                <div class="container">
                    <div class="small text-center text-muted">MIT License</div>
                    <div class="small text-center text-muted">2019 - MJ_Viks</div>
                </div>
            </footer>
        );
    }
}
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <h1>Email already registered</h1>
                    <h3>
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Try to login</a>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
